/* OBS: 1) Generic Type
The interface use T generic type to define the type of the results property
in the Data interface.
According to the API documentation, there's many Entity Types.
For demonstration purposes, we are using only the Heroe Interface, but in case
of a new requirement, we can easily add new Entity Types.
*/
export interface IMarvelHttpRequest<T> {
  code:            number;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            Data<T>;
}

export interface Data<T> {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: T[];
}
