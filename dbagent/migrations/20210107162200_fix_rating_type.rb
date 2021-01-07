Sequel.migration do
  up do
    run <<-SQL

      ALTER TABLE vinyls ALTER COLUMN rating TYPE real;

    SQL
  end
end
