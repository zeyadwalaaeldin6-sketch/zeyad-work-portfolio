import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Rating = {
  id: number
  rating: number
  comment?: string
  reviewer_name?: string
  is_anonymous: boolean
  created_at: string
}