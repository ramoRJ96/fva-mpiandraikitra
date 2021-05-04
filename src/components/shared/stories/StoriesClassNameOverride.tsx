import React, { ElementType } from "react";

const StoriesClassNameOverride = ({ component, args, useStyles }: any) => {
  const classes = useStyles();
  const Component = component as ElementType;
  return (
    <Component
      {...args}
      className={(classes as any)[(args as any)?.className]}
      rootClassName={(classes as any)[(args as any)?.rootClassName]}
    />
  );
};

export default StoriesClassNameOverride;
