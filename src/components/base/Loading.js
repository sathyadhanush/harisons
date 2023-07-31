import { Spinner } from 'evergreen-ui';

function Loading({
  width = '100%',
  height = '100%',
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height,
        // stroke: 'red',
      }}
    >
      <Spinner />
    </div>
  );
}

export default Loading;
