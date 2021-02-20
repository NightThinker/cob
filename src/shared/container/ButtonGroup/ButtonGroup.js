import Text from '../../components/Text/Text'

const ButtonGroup = ({ number, onIncrement, onDecrement, ...other }) => {
  return (
    <div className='flex rounded-10 border-2 border-black-light w-103 h-38 justify-between bg-gray-md'>
      <button
        className='flex justify-center items-center w-30p rounded-l-10 white focus:outline-none '
        onClick={onDecrement}>
        <Text size='text-lg' weight='font-medium' color='text-black-light'>-</Text>
      </button>
      <div className='flex justify-center items-center '>
        <Text size='text-lg' weight='font-medium' color='text-black-light'>{number || 0}</Text>
      </div>
      <button className='flex justify-center  items-center w-30p rounded-r-10 white focus:outline-none ' onClick={onIncrement}>
        <Text size='text-lg' weight='font-medium' color='text-black-light'>+</Text>
      </button>
    </div>
  )
}

export default ButtonGroup