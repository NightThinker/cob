import ContentLoader from "react-content-loader";

const Loading = () => {
  return (
    <div className='flex bg-white-light rounded pt-30 pl-20 pr-30 pb-28 gap-25 w-11/12' style={{ height: '387px' }}>
      <ContentLoader className='w-11/12'>
        <rect x="0" y="0" rx="5" ry="5" width="300" height="300" />
        <rect x="330" y="0" rx="4" ry="4" width="200" height="13" />
        <rect x="330" y="30" rx="4" ry="4" width="500" height="13" />
        <rect x="330" y="60" rx="4" ry="4" width="500" height="13" />
        <rect x="330" y="90" rx="4" ry="4" width="500" height="13" />
        <rect x="330" y="120" rx="4" ry="4" width="300" height="13" />
        <rect x="330" y="150" rx="4" ry="4" width="250" height="13" />
        <rect x="330" y="180" rx="4" ry="4" width="250" height="13" />
      </ContentLoader>
    </div>
  )
}

export default Loading