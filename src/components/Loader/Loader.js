import { MutatingDots } from 'react-loader-spinner';

export function Loader() {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="pink"
      secondaryColor="#pink"
      radius="12.5"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      ariaLabel="mutating-dots-loading"
      visible={true}
    />
  );
}
