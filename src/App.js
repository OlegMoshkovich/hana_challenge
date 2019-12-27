import React, { useState } from 'react';
import { Button } from './components/button'
import { Card } from './components/card'
import styled from 'styled-components'
import Dropdown from 'react-dropdown'


const PageContainer = styled.div`
background-color:#EEEDE9;
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`
const Title = styled.div`
position:absolute;
top:30px;
left:40px
font-family: 'Amatic SC', cursive;
font-size:24px;
`




function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState('')
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('display article')

  if (loading && articles.length > 0) {
    let genRandom = Math.floor(Math.random() * 10)
    console.log('random generator', genRandom)
    setLoading(false)
    setArticle(articles[genRandom].abstract)
    console.log(article)
  }

  const fetchArticles = (searchTerm) => {
    //every time the button is pressed set the loading to true so new article is displayed
    setLoading(true)

    //only fetch articles if the array of articles is empty
    if (articles.length === 0) {
      fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=LhjEBx8TxE98grgsu312D8vRwatwxrWo`)
        .then(resp => resp.json())
        .then(data => data.response)
        .then(data => data.docs)
        .then(data => {
          console.log(data)
          setArticles(data)
          setTitle('next article')
        })
        .catch((function (error) {
          setArticles([])
          console.log('error from the fetch', error)
        }))
    } else {
      setTitle('next article')
      return
    }
  }

  const _onSelect = (e) => {
    console.log(e)
  }


  return (
    <PageContainer>
      <Title>hana interview challenge</Title>
      <Card article={article} />
      <Button fetchArticles={fetchArticles} title={title} />

    </PageContainer>
  );
}

export default App;
