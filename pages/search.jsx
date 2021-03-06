import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'
import response from '../response'

const Search = ({ results }) => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Search Result */}
      <SearchResults results={results} />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const useDummyData = false
  const startIndex = context.query.start || '0'
  console.log(context.query.term)
  const data = useDummyData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json())
  return {
    props: {
      results: data,
    },
  }
}
