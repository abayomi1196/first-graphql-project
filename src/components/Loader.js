import LoaderSpinner from "react-loader-spinner";

function Loader() {
  return (
    <div className='loader'>
      <LoaderSpinner type='Puff' color='#00BFFF' height={100} width={100} />
    </div>
  );
}

export default Loader;
