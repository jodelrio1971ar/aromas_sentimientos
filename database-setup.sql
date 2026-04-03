CREATE TABLE quiz_responses (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(120) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  answers JSONB NOT NULL,
  recommended_fragrance VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  ip_address VARCHAR(45),
  user_feedback VARCHAR(500)
);


ALTER TABLE quiz_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON quiz_responses
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public read" ON quiz_responses
  FOR SELECT
  USING (true);


CREATE INDEX idx_email_quiz ON quiz_responses(email);
CREATE INDEX idx_fragrance_quiz ON quiz_responses(recommended_fragrance);
CREATE INDEX idx_created_at_quiz ON quiz_responses(created_at DESC);


CREATE TABLE quiz_feedback (
  id BIGSERIAL PRIMARY KEY,
  quiz_response_id BIGINT REFERENCES quiz_responses(id) ON DELETE CASCADE,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  comment VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW()
);


CREATE VIEW top_fragancias AS
SELECT 
  recommended_fragrance,
  COUNT(*) as total_recommendations,
  COUNT(DISTINCT email) as unique_visitors,
  ROUND(100.0 * COUNT(*) / (SELECT COUNT(*) FROM quiz_responses), 2) as percentage,
  MAX(created_at) as latest_recommendation
FROM quiz_responses
GROUP BY recommended_fragrance
ORDER BY total_recommendations DESC
LIMIT 5;


CREATE VIEW stats_emociones AS
SELECT 
  answers->>'emo_feeling' as emocion_principal,
  COUNT(*) as total,
  ROUND(100.0 * COUNT(*) / (SELECT COUNT(*) FROM quiz_responses), 2) as percentage
FROM quiz_responses
WHERE answers->>'emo_feeling' IS NOT NULL
GROUP BY answers->>'emo_feeling'
ORDER BY total DESC;


CREATE VIEW stats_aromas AS
SELECT 
  answers->>'aroma_type' as tipo_aroma,
  COUNT(*) as total,
  ROUND(100.0 * COUNT(*) / (SELECT COUNT(*) FROM quiz_responses), 2) as percentage
FROM quiz_responses
WHERE answers->>'aroma_type' IS NOT NULL
GROUP BY answers->>'aroma_type'
ORDER BY total DESC;


CREATE OR REPLACE FUNCTION get_recent_recommendations(days INT DEFAULT 30)
RETURNS TABLE (
  fragrance VARCHAR,
  count BIGINT,
  percentage NUMERIC
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    recommended_fragrance,
    COUNT(*)::BIGINT,
    ROUND(100.0 * COUNT(*) / (
      SELECT COUNT(*) FROM quiz_responses 
      WHERE created_at > NOW() - INTERVAL '1 day' * days
    ), 2)::NUMERIC
  FROM quiz_responses
  WHERE created_at > NOW() - INTERVAL '1 day' * days
  GROUP BY recommended_fragrance
  ORDER BY count DESC;
END;
$$ LANGUAGE plpgsql;

