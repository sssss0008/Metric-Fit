export const SCHEMA = `
  CREATE TABLE IF NOT EXISTS workouts (
    id TEXT PRIMARY KEY,
    name TEXT,
    start_time INTEGER,
    end_time INTEGER,
    volume REAL,
    is_template INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS exercises (
    id TEXT PRIMARY KEY,
    workout_id TEXT,
    name TEXT,
    exercise_order INTEGER,
    FOREIGN KEY(workout_id) REFERENCES workouts(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS sets (
    id TEXT PRIMARY KEY,
    exercise_id TEXT,
    reps INTEGER,
    weight REAL,
    rpe INTEGER,
    set_order INTEGER,
    is_pr INTEGER DEFAULT 0,
    FOREIGN KEY(exercise_id) REFERENCES exercises(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS physical_metrics (
    date TEXT PRIMARY KEY,
    weight REAL,
    body_fat REAL,
    hydration REAL,
    sleep REAL
  );

  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
  );
`;
