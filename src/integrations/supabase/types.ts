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
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      audit_logs: {
        Row: {
          action: Database["public"]["Enums"]["audit_action"]
          actor_id: string
          created_at: string
          diff_json: Json | null
          entity_id: string
          entity_type: string
          id: string
        }
        Insert: {
          action: Database["public"]["Enums"]["audit_action"]
          actor_id: string
          created_at?: string
          diff_json?: Json | null
          entity_id: string
          entity_type: string
          id?: string
        }
        Update: {
          action?: Database["public"]["Enums"]["audit_action"]
          actor_id?: string
          created_at?: string
          diff_json?: Json | null
          entity_id?: string
          entity_type?: string
          id?: string
        }
        Relationships: []
      }
      faq_categories: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      faq_versions: {
        Row: {
          answer_markdown: string
          changed_by: string
          created_at: string
          faq_id: string
          id: string
          question: string
          status: Database["public"]["Enums"]["faq_status"]
          tags: string[] | null
          version_number: number
        }
        Insert: {
          answer_markdown: string
          changed_by: string
          created_at?: string
          faq_id: string
          id?: string
          question: string
          status: Database["public"]["Enums"]["faq_status"]
          tags?: string[] | null
          version_number: number
        }
        Update: {
          answer_markdown?: string
          changed_by?: string
          created_at?: string
          faq_id?: string
          id?: string
          question?: string
          status?: Database["public"]["Enums"]["faq_status"]
          tags?: string[] | null
          version_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "faq_versions_faq_id_fkey"
            columns: ["faq_id"]
            isOneToOne: false
            referencedRelation: "faqs"
            referencedColumns: ["id"]
          },
        ]
      }
      faqs: {
        Row: {
          answer_markdown: string
          category_id: string
          created_at: string
          created_by: string
          id: string
          is_featured: boolean
          published_at: string | null
          question: string
          slug: string
          sort_order: number
          status: Database["public"]["Enums"]["faq_status"]
          tags: string[] | null
          updated_at: string
          updated_by: string
        }
        Insert: {
          answer_markdown: string
          category_id: string
          created_at?: string
          created_by: string
          id?: string
          is_featured?: boolean
          published_at?: string | null
          question: string
          slug: string
          sort_order?: number
          status?: Database["public"]["Enums"]["faq_status"]
          tags?: string[] | null
          updated_at?: string
          updated_by: string
        }
        Update: {
          answer_markdown?: string
          category_id?: string
          created_at?: string
          created_by?: string
          id?: string
          is_featured?: boolean
          published_at?: string | null
          question?: string
          slug?: string
          sort_order?: number
          status?: Database["public"]["Enums"]["faq_status"]
          tags?: string[] | null
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "faqs_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "faq_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin_or_editor: {
        Args: { _user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "editor" | "viewer"
      audit_action:
        | "CREATE_FAQ"
        | "UPDATE_FAQ"
        | "PUBLISH_FAQ"
        | "UNPUBLISH_FAQ"
        | "ARCHIVE_FAQ"
        | "REVERT_VERSION"
        | "DELETE_FAQ"
        | "CREATE_CATEGORY"
        | "UPDATE_CATEGORY"
        | "DELETE_CATEGORY"
        | "REORDER_CATEGORY"
        | "REORDER_FAQ"
      faq_status: "draft" | "published" | "archived"
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
    Enums: {
      app_role: ["admin", "editor", "viewer"],
      audit_action: [
        "CREATE_FAQ",
        "UPDATE_FAQ",
        "PUBLISH_FAQ",
        "UNPUBLISH_FAQ",
        "ARCHIVE_FAQ",
        "REVERT_VERSION",
        "DELETE_FAQ",
        "CREATE_CATEGORY",
        "UPDATE_CATEGORY",
        "DELETE_CATEGORY",
        "REORDER_CATEGORY",
        "REORDER_FAQ",
      ],
      faq_status: ["draft", "published", "archived"],
    },
  },
} as const
