Sequel.migration do
  up do
    run <<-SQL

    CREATE TABLE artists (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR NOT NULL,
    );

    CREATE TABLE albums (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      artist_id UUID REFERENCES artists (id),
      name VARCHAR NOT NULL,
      release_date DATE,
      record_label VARCHAR,
      image VARCHAR,
      rating INTEGER CHECK (rating >= 0 AND rating <= 5)
    );

    CREATE TABLE songs (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      album_id UUID REFERENCES albums (id),
      name VARCHAR NOT NULL,
      track_number INTEGER,
      rating INTEGER CHECK (rating >= 0 AND rating <= 5)
    );

    CREATE TABLE genres (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR UNIQUE NOT NULL,
    );

    CREATE TABLE songs_genres (
      genre_id UUID REFERENCES genres (id),
      song_id UUID REFERENCES songs (id),
      PRIMARY KEY (genre_id, song_id)
    );

    CREATE TABLE albums_genres (
      genre_id UUID REFERENCES genres (id),
      album_id UUID REFERENCES albums (id),
      PRIMARY KEY (genre_id, album_id)
    );

    CREATE TABLE songs_feature_artists (
      artist_id UUID REFERENCES artists (id),
      song_id UUID REFERENCES songs (id),
      PRIMARY KEY (artist_id, song_id)
    );

    CREATE TABLE albums_feature_artists (
      artist_id UUID REFERENCES artists (id),
      album_id UUID REFERENCES albums (id),
      PRIMARY KEY (artist_id, album_id)
    );

    SQL
  end
end
