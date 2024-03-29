function Loader(props) {
  const { color, size } = props;
  return (
    <div className="loader">
      <svg
        className={`logo ${color}`}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        viewBox="0 0 398.000000 378.000000"
      >
        <path
          d="M1905 3756 c-16 -7 -37 -22 -46 -32 -24 -28 -1859 -3688 -1859 -3708 0 -15 12 -16 112 -14 l113 3 58 105 c48 86 674 1332 690 1373 6 14 -14 35 544
    -573 235 -257 423 -453 444 -464 43 -23 76 -17 122 23 l32 29 3 421 c2 232 6 421 11 421 4 0 81 -76 170 -170 176 -184 209 -206 268 -181 16 6 120 108 232
    227 112 118 207 211 212 207 4 -4 125 -242 268 -528 144 -286 305 -604 358
    -707 l98 -188 117 0 c65 0 118 3 118 6 0 13 -1853 3700 -1869 3718 -37 43
    -134 59 -196 32z m536 -1198 l456 -912 -175 -185 c-96 -103 -179 -190 -184
    -196 -5 -5 -104 86 -246 228 l-238 237 -45 0 c-48 0 -81 -17 -101 -53 -10 -16
    -14 -128 -18 -429 l-5 -407 -395 430 c-217 237 -395 434 -395 437 0 11 880
    1762 885 1762 3 0 210 -410 461 -912z"
          transform="translate(0.000000,378.000000) scale(0.100000,-0.100000)"
        />
      </svg>
    </div>
  );
}

export default Loader;
