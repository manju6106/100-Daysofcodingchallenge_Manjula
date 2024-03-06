# Create a list of favorite movies
favorite_movies = ["Darling", "Fida", "Saki", "Godhavari"]

# Add a new movie to the list
favorite_movies.append("Malli malli edhi rani roju")

# Create a tuple with release years of the movies
release_years = (2010, 2017, 2000, 2006, 2015)

# Print the third movie and its release year
third_movie = favorite_movies[2]
third_movie_year = release_years[2]
print(f"The third movie is '{third_movie}' released in {third_movie_year}.")

# Check if a specific movie is in the list
specific_movie = "Saki"
if specific_movie in favorite_movies:
    print(f"{specific_movie} is in the list of favorite movies.")
else:
    print(f"{specific_movie} is not in the list.")

# Concatenate your list with a friend's list
friend_favorite_movies = ["Arya-2", "Put your head on my sholuder", "Varsham"]
combined_movies = favorite_movies + friend_favorite_movies
print("Combined list of favorite movies:", combined_movies)
