-- Create ratings table
CREATE TABLE IF NOT EXISTS ratings (
  id BIGSERIAL PRIMARY KEY,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  reviewer_name TEXT,
  is_anonymous BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow everyone to read ratings
CREATE POLICY "Allow public read access" ON ratings
  FOR SELECT USING (true);

-- Allow everyone to insert ratings (anonymous submissions)
CREATE POLICY "Allow public insert access" ON ratings
  FOR INSERT WITH CHECK (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS ratings_created_at_idx ON ratings (created_at DESC);