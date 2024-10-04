import { Country, Region } from "./"

export interface CacheStore {
  byCapital: CountriesCache;
  byCountry: CountriesCache;
  byRegion: CountriesByRegionCache;
}

export interface CountriesCache {
  query: string;
  countries: Country[];
}

export interface CountriesByRegionCache {
  query?: Region;
  countries: Country[];
}