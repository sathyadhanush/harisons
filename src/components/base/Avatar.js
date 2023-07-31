import { Avatar as EvergreenAvatar } from 'evergreen-ui';

function Avatar({ name, size, image }) {
  return (
    <EvergreenAvatar
      src={image}
      name={name}
      size={size}
    />
  );
}

export default Avatar;
