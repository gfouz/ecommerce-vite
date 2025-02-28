const Search = ({ size = 18, color }: { size?: number; color?: string }) => (
  <svg
    style={{ fill: color }}
    width={size}
    height={size}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28 4.72 28.72l7.968-7.969A9.922 9.922 0 0019 23c5.512 0 10-4.488 10-10S24.512 3 19 3zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z' />
  </svg>
);

export default Search;
