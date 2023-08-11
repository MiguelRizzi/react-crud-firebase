import Spinner from 'react-bootstrap/Spinner';

function SpinnerComponent({ loading, children }) {
  return loading ? (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Spinner animation="grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    <>{children}</>
  );
}

export default SpinnerComponent;
