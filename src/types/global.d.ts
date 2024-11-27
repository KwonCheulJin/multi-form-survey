type Cn<T = NonNullable<unknown>> = T & {
  className?: string;
};

type ValueOf<T> = T[keyof T];
