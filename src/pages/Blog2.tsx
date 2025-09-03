import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

/** ===== Config =====
 * Usa el proxy /blog-api para evitar CORS.
 * Si usas Vite, puedes sobreescribir con VITE_WP_API_BASE
 * (p. ej. VITE_WP_API_BASE="https://blog.skisolution360.com/wp-json")
 */
const API_BASE = import.meta?.env?.VITE_WP_API_BASE || "/blog-api"; // <- recomendado

// Utilidades
const stripHtml = (html = "") => {
  // Evita XSS: no usamos innerHTML en la UI salvo en <h2> (título).
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return (tmp.textContent || tmp.innerText || "").trim();
};

const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

const readingTime = (text = "") => {
  const words = text.split(/\s+/).filter(Boolean).length;
  // ~200 wpm promedio
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min`;
};

// Tarjeta esquelética (loading)
function PostSkeleton() {
  return (
    <Card className="border-ski-lime/20">
      <div className="w-full aspect-video animate-pulse bg-slate-100" />
      <CardHeader>
        <div className="h-5 w-24 bg-slate-100 rounded mb-3 animate-pulse" />
        <div className="h-6 w-3/4 bg-slate-100 rounded mb-2 animate-pulse" />
        <div className="flex gap-3">
          <div className="h-4 w-24 bg-slate-100 rounded animate-pulse" />
          <div className="h-4 w-16 bg-slate-100 rounded animate-pulse" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-slate-100 rounded animate-pulse" />
          <div className="h-4 w-4/6 bg-slate-100 rounded animate-pulse" />
        </div>
        <div className="h-10 w-full bg-slate-100 rounded animate-pulse" />
      </CardContent>
    </Card>
  );
}

export default function Blog2() {
  // Estado
  const [posts, setPosts] = useState([]); // respuesta cruda de WP
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false); // refresco silencioso
  const [error, setError] = useState(null);
  const totalPagesRef = useRef(1);

  // Derivados para tu UI (mapear WP → tu card)
  const cards = useMemo(() => {
    return posts.map((p) => {
      const titleHtml = p.title?.rendered || "";
      const excerpt = stripHtml(p.excerpt?.rendered || "");
      const img =
        p._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium
          ?.source_url ||
        p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        null;

      // Categoría (primer término del primer grupo wp:term)
      const category =
        p._embedded?.["wp:term"]?.[0]?.[0]?.name || "Sin categoría";

      // Tags opcionales
      const tags =
        p._embedded?.["wp:term"]?.[1]?.map((t) => t.name).slice(0, 3) || [];

      return {
        id: p.id,
        slug: p.slug,
        titleHtml,
        excerpt,
        category,
        date: fmtDate(p.date),
        readTime: readingTime(excerpt),
        image: img,
        // Enlace interno a tu detalle en React; si prefieres detalle en WP, usa p.link
        link: `/blog/${p.slug}`,
      };
    });
  }, [posts]);

  // Carga con paginación
  async function load(p = 1) {
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      // _embed trae la imagen destacada y términos (categorías, tags)
      // _fields minimiza la payload
      const url = `${API_BASE}/wp/v2/posts?per_page=9&page=${p}&_embed=1&_fields=id,slug,date,link,title,excerpt,_embedded`;
      const controller = new AbortController();
      const res = await fetch(url, { signal: controller.signal });

      if (!res.ok) {
        // 400/404 cuando p > totalPages
        if (res.status === 400 || res.status === 404) {
          setHasMore(false);
        } else {
          throw new Error(`HTTP ${res.status}`);
        }
      } else {
        // Páginas totales desde header
        const totalPages = parseInt(
          res.headers.get("X-WP-TotalPages") || "1",
          10
        );
        totalPagesRef.current = totalPages;

        const data = await res.json();
        setPosts((prev) => (p === 1 ? data : [...prev, ...data]));
        setPage(p);
        setHasMore(p < totalPages);
      }
    } catch (e) {
      if (e.name !== "AbortError") setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  // Auto-actualización: poll “suave” cada 60s de la primera página
  useEffect(() => {
    load(1);
    const id = setInterval(async () => {
      try {
        setUpdating(true);
        const res = await fetch(
          `${API_BASE}/wp/v2/posts?per_page=9&page=1&_embed=1&_fields=id,slug,date,link,title,excerpt,_embedded`
        );
        if (!res.ok) return;
        const fresh = await res.json();
        // Si el primer ID cambió, refrescamos toda la lista desde la página 1
        if (!posts[0] || fresh[0]?.id !== posts[0]?.id) {
          setPosts(fresh);
          setPage(1);
          setHasMore(
            1 < parseInt(res.headers.get("X-WP-TotalPages") || "1", 10)
          );
        }
      } catch {
        /* noop */
      } finally {
        setUpdating(false);
      }
    }, 60000); // 60s; ajusta si quieres

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // solo al montar

  return (
    <div className="min-h-screen bg-gradient-to-br from-ski-white via-ski-white to-ski-lime/5">
      {/* SEO básico (si usas react-helmet, cámbialo por <Helmet> */}
      <title>
        Blog Ski Solution 360 - Guías y consejos para estaciones de esquí
      </title>
      <meta
        name="description"
        content="Descubre las últimas tendencias, estrategias y consejos para digitalizar y optimizar tu estación de esquí con los expertos de Ski Solution 360."
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-ski-black via-ski-gray to-ski-black text-ski-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-ski-lime text-ski-black font-semibold mb-4">
              Blog Ski Solution 360
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Guías y consejos para
              <span className="text-ski-lime"> estaciones de esquí</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Descubre las últimas tendencias, estrategias y mejores prácticas
              para digitalizar y optimizar tu estación
            </p>
            {updating && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ski-lime/20 text-ski-black text-sm">
                Actualizando artículos…
                <span className="animate-pulse">•</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Grid de posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Últimos <span className="text-ski-lime">artículos</span>
              </h2>
              <p className="text-lg text-ski-black/70 max-w-2xl mx-auto">
                Mantente al día con las últimas tendencias y estrategias del
                sector de estaciones de esquí
              </p>
              {error && (
                <p className="text-red-600 mt-3">
                  Error al cargar artículos: {error}
                </p>
              )}
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {/* Loading state inicial */}
              {loading && posts.length === 0 && (
                <>
                  <PostSkeleton />
                  <PostSkeleton />
                  <PostSkeleton />
                </>
              )}

              {/* Tarjetas reales */}
              {cards.map((post) => (
                <Card
                  key={post.id}
                  className={`bg-gradient-to-br from-ski-lime/20 to-ski-lime/10 border-ski-lime/20 hover:border-ski-lime/40 transition-all duration-300 hover:shadow-lg group overflow-hidden`}
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt={stripHtml(post.titleHtml)}
                      className="w-full aspect-video object-cover"
                      loading="lazy"
                    />
                  )}

                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="secondary"
                        className="bg-ski-lime/20 text-ski-black border-ski-lime/30"
                      >
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-ski-black/60">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <CardTitle
                      className="text-xl mb-3 group-hover:text-ski-lime transition-colors"
                      dangerouslySetInnerHTML={{ __html: post.titleHtml }}
                    />

                    <div className="flex items-center gap-4 text-sm text-ski-black/60 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        Ski Solution 360
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-ski-black/70 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* tags opcionales
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-ski-lime/30 text-ski-black/60">
                          {tag}
                        </Badge>
                      ))}
                    </div> */}

                    <Link to={post.link}>
                      <Button className="w-full bg-ski-lime text-ski-black hover:bg-ski-lime-light group">
                        Leer artículo completo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Cargar más */}
            <div className="text-center mt-10">
              {hasMore && (
                <Button
                  variant="outline"
                  onClick={() => load(page + 1)}
                  disabled={loading}
                  className="border-ski-lime/40"
                >
                  {loading ? "Cargando..." : "Cargar más"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-ski-lime/10 via-ski-lime/5 to-ski-lime/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              No te pierdas nuestras{" "}
              <span className="text-ski-lime">últimas guías</span>
            </h2>
            <p className="text-lg mb-8 text-ski-black/70">
              Suscríbete para recibir los últimos consejos y tendencias del
              sector directamente en tu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg border border-ski-lime/20 focus:outline-none focus:ring-2 focus:ring-ski-lime/50"
              />
              <Button className="bg-ski-lime text-ski-black hover:bg-ski-lime-light px-8">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-r from-ski-black via-ski-gray to-ski-black text-ski-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para{" "}
              <span className="text-ski-lime">transformar tu estación</span>?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Aplica todo lo que has aprendido en estos artículos con la ayuda
              de nuestros expertos
            </p>
            <Button
              size="lg"
              className="bg-ski-lime text-ski-black hover:bg-ski-lime-light"
            >
              Solicita una consultoría gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
