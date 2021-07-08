import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getRecipesBySearchTerm } from "../../../DAL/recipesApi"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Loader from "../../Loader/Loader"
import Message from "../../Message/Message"

const SearchResults = ({ md, lg, enteredKeyword }) => {
  const [searchRecipesResults, setSearchRecipesResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (enteredKeyword.length === 0) {
      setSearchRecipesResults([])
      return
    }

    const debounceTimer = setTimeout(async () => {
      setIsLoading(true)
      const recipes = await getRecipesBySearchTerm(enteredKeyword)
      setSearchRecipesResults(recipes)
      setIsLoading(false)
    }, 800)

    return () => {
      clearInterval(debounceTimer)
    }
  }, [enteredKeyword])

  if (!enteredKeyword || searchRecipesResults.length === 0) {
    return null
  }

  return (
    <Row className="w-100">
      <Col
        className="my-2 mx-auto"
        md={md}
        lg={lg}
        style={{
          zIndex: "5",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
        }}
      >
        {isLoading && <Loader />}
        {error && <Message> {error} </Message>}
        {searchRecipesResults &&
          searchRecipesResults.map((recipe) => (
            <p key={recipe.id}>
              <Link className="my-1" to={`/recipes/${recipe.id}`}>
                {recipe.title}
              </Link>
            </p>
          ))}
      </Col>
    </Row>
  )
}

export default SearchResults
