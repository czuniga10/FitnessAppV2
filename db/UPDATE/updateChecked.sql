UPDATE program_workouts
SET
    iscomplete = $2
WHERE
    id = $1
;

SELECT id,iscomplete from program_workouts where id = $1;