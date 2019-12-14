UPDATE program_workouts
SET
    iscomplete = $2
WHERE
    id = $1
;