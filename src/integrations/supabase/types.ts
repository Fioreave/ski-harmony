export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      blog_post_tags: {
        Row: {
          blog_post_id: string
          tag_id: string
        }
        Insert: {
          blog_post_id: string
          tag_id: string
        }
        Update: {
          blog_post_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_tags_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_post_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author: string
          category_id: string | null
          content_cat: string
          content_en: string
          content_es: string
          content_fr: string
          created_at: string
          excerpt_cat: string | null
          excerpt_en: string | null
          excerpt_es: string | null
          excerpt_fr: string | null
          featured_image_url: string | null
          id: string
          meta_description_cat: string | null
          meta_description_en: string | null
          meta_description_es: string | null
          meta_description_fr: string | null
          meta_title_cat: string | null
          meta_title_en: string | null
          meta_title_es: string | null
          meta_title_fr: string | null
          published: boolean
          read_time: number | null
          slug: string
          title_cat: string
          title_en: string
          title_es: string
          title_fr: string
          updated_at: string
        }
        Insert: {
          author?: string
          category_id?: string | null
          content_cat: string
          content_en: string
          content_es: string
          content_fr: string
          created_at?: string
          excerpt_cat?: string | null
          excerpt_en?: string | null
          excerpt_es?: string | null
          excerpt_fr?: string | null
          featured_image_url?: string | null
          id?: string
          meta_description_cat?: string | null
          meta_description_en?: string | null
          meta_description_es?: string | null
          meta_description_fr?: string | null
          meta_title_cat?: string | null
          meta_title_en?: string | null
          meta_title_es?: string | null
          meta_title_fr?: string | null
          published?: boolean
          read_time?: number | null
          slug: string
          title_cat: string
          title_en: string
          title_es: string
          title_fr: string
          updated_at?: string
        }
        Update: {
          author?: string
          category_id?: string | null
          content_cat?: string
          content_en?: string
          content_es?: string
          content_fr?: string
          created_at?: string
          excerpt_cat?: string | null
          excerpt_en?: string | null
          excerpt_es?: string | null
          excerpt_fr?: string | null
          featured_image_url?: string | null
          id?: string
          meta_description_cat?: string | null
          meta_description_en?: string | null
          meta_description_es?: string | null
          meta_description_fr?: string | null
          meta_title_cat?: string | null
          meta_title_en?: string | null
          meta_title_es?: string | null
          meta_title_fr?: string | null
          published?: boolean
          read_time?: number | null
          slug?: string
          title_cat?: string
          title_en?: string
          title_es?: string
          title_fr?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          description_cat: string | null
          description_en: string | null
          description_es: string | null
          description_fr: string | null
          id: string
          name_cat: string
          name_en: string
          name_es: string
          name_fr: string
          slug: string
        }
        Insert: {
          created_at?: string
          description_cat?: string | null
          description_en?: string | null
          description_es?: string | null
          description_fr?: string | null
          id?: string
          name_cat: string
          name_en: string
          name_es: string
          name_fr: string
          slug: string
        }
        Update: {
          created_at?: string
          description_cat?: string | null
          description_en?: string | null
          description_es?: string | null
          description_fr?: string | null
          id?: string
          name_cat?: string
          name_en?: string
          name_es?: string
          name_fr?: string
          slug?: string
        }
        Relationships: []
      }
      tags: {
        Row: {
          created_at: string
          id: string
          name_cat: string
          name_en: string
          name_es: string
          name_fr: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          name_cat: string
          name_en: string
          name_es: string
          name_fr: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          name_cat?: string
          name_en?: string
          name_es?: string
          name_fr?: string
          slug?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          email: string | null
          id: string
          password_hash: string
          role: string
          updated_at: string
          username: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          password_hash: string
          role?: string
          updated_at?: string
          username: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          password_hash?: string
          role?: string
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
