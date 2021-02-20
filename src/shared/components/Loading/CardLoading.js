import ContentLoader from "react-content-loader";

const CardLoading = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      {arr.map(() => (
        <div className='flex bg-white-light rounded-10 pt-30 pl-20 pr-30 pb-28 gap-25'>
          <ContentLoader>
            <rect x="0" y="0" rx="5" ry="5" width="160" height="80" />
            {/* <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="10" /> */}
            <rect x="0" y="100" rx="5" ry="5" width="40" height="40" />
            <rect x="50" y="107" rx="4" ry="4" width="300" height="13" />
            <rect x="50" y="127" rx="4" ry="4" width="300" height="13" />
          </ContentLoader>
        </div>
      ))}
    </>
  )
}

export default CardLoading