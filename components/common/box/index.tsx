import React, { ReactElement } from "react";
import { BoxType } from "../../../models";

/**
 * ```jsx
 * // Example component
 * <Box title="Hello world!" icons={sampleIcon} />
 * ```
 * @param { BoxType }               props.title - Title of the box
 * @param { BoxType }               props.icons - Icons of the box
 * @description                     About Section
 * @returns { ReactElement }        A box square with a title and icons
 */

const Box: React.FC<BoxType> = ({ title, icons }: BoxType): ReactElement => {
  return (
    <div className="font-thin text-4xl m-5 flex-column rounded-2xl dark:hover:border-violet-700 hover:border-yellow-500 border-2 border-gray-900 dark:border-white p-2">
      <h3 className="text-center text-2xl">{title}</h3>
      <div className="flex justify-evenly mt-5">{icons}</div>
    </div>
  );
};

export default Box;
