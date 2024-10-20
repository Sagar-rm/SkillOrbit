import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef(({ className, value = 0, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - value}%)` }} // Value defaults to 0 if not provided
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

Progress.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number, // Ensures 'value' is a number
};

Progress.defaultProps = {
  value: 0, // Default value if not passed
};

export default Progress;
