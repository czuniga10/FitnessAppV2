SELECT w.name,pw.id,sets,reps,iscomplete FROM program_workouts as pw
JOIN workout as w on w.ID = pw.workoutID
WHERE programID = $1;