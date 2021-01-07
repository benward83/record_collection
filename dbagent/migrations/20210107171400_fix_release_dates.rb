Sequel.migration do
  up do
    run <<-SQL

      ALTER TABLE vinyls DROP COLUMN release_date;
      ALTER TABLE vinyls ADD COLUMN release_date integer
        CHECK (release_date > 1900 AND release_date <= date_part('year', now()));

    SQL
  end
end
