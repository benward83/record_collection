Sequel.migration do
  up do
    run <<-SQL
      CREATE EXTENSION "uuid-ossp";

      CREATE TYPE quality AS ENUM ('M', 'NM', 'E', 'VG', 'G', 'F', 'P');
      CREATE TYPE vinyltype AS ENUM ('EP', 'LP', 'SINGLE');
      CREATE TYPE vinylside AS ENUM ('A', 'B');

      CREATE TABLE artists (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR NOT NULL
      );

      CREATE TABLE vinyls (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        artist_id UUID REFERENCES artists (id),
        name VARCHAR NOT NULL,
        release_date DATE,
        record_label VARCHAR,
        image VARCHAR,
        type vinyltype NOT NULL,
        quality quality,
        rating INTEGER CHECK (rating >= 0 AND rating <= 5)
      );

      CREATE TABLE songs (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        vinyl_id UUID REFERENCES vinyls (id) ON DELETE CASCADE,
        name VARCHAR NOT NULL,
        track_number INTEGER,
        side vinylside NOT NULL,
        rating INTEGER CHECK (rating >= 0 AND rating <= 5),
        CONSTRAINT UQ_vinyl_track_number_per_side UNIQUE(vinyl_id, track_number, side)
      );

      CREATE TABLE genres (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR UNIQUE NOT NULL
      );

      CREATE TABLE songs_genres (
        genre_id UUID REFERENCES genres (id),
        song_id UUID REFERENCES songs (id) ON DELETE CASCADE,
        PRIMARY KEY (genre_id, song_id)
      );

      CREATE TABLE vinyls_genres (
        genre_id UUID REFERENCES genres (id),
        vinyl_id UUID REFERENCES vinyls (id) ON DELETE CASCADE,
        PRIMARY KEY (genre_id, vinyl_id)
      );

      CREATE TABLE songs_feature_artists (
        artist_id UUID REFERENCES artists (id),
        song_id UUID REFERENCES songs (id) ON DELETE CASCADE,
        PRIMARY KEY (artist_id, song_id)
      );

      CREATE TABLE vinyls_feature_artists (
        artist_id UUID REFERENCES artists (id),
        vinyl_id UUID REFERENCES vinyls (id) ON DELETE CASCADE,
        PRIMARY KEY (artist_id, vinyl_id)
      );

    SQL
  end
end
