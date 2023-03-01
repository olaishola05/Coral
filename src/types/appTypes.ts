export type formData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type processIconLists = {
  id?: string;
  name?: string;
  icon: string | React.ReactNode;
  background?: string;
  divider?: string | React.ReactNode;
  extraIcon?: string | React.ReactNode;
}

export type processIconList = processIconLists[];

type processIconsRight = string | React.ReactNode;

export type processIconsRightArr = processIconsRight[]

