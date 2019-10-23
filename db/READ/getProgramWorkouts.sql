SELECT w.name,sets,reps,isComplete FROM program_workouts as pw
JOIN workout as w on w.ID = pw.workoutID
WHERE programID = $1;