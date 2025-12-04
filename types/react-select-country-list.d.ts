declare module 'react-select-country-list' {
  interface CountryData {
    value: string
    label: string
  }

  interface CountryList {
    getData(): CountryData[]
    getLabel(code: string): string | undefined
  }

  function countryList(): CountryList

  export default countryList
}
