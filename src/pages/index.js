import Layout from '../components/Layout/Layout'
import SearchInput from '../components/SearchInput/SearchInput'
import styles from '../styles/Home.module.css'

export default function Home({ countries }) {
  console.log(countries)
  return <Layout>
    <div className={styles.count}>
      Found {countries.length} countries
      <SearchInput placeholder="Filter By Name, Region or Sub-Region" />
    </div>
  </Layout>
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all')
  const countries = await res.json() 
  return {
    props: {
      countries
    }
  }
}