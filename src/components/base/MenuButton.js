import {
  Label, Popover, Position,
} from 'evergreen-ui';
import Icons from '../Icons';

function MenuButton({ menus, onClick }) {
  return (
    <Popover
      // eslint-disable-next-line react/no-unstable-nested-components
      content={({ close }) => (
        <div className="flex-column" style={{ margin: '20px', rowGap: '15px' }}>
          {menus.map((menu) => (
            <Label
              color={menu.color}
              cursor="pointer"
              onClick={() => {
                close();
                onClick(menu);
              }}
            >
              {menu.name}
            </Label>
          ))}
        </div>
      )}
      position={Position.TOP_RIGHT}
    >
      <div className="flex-center" style={{ height: '50px' }}>
        {Icons.More}
      </div>
    </Popover>
  );
}

export default MenuButton;
