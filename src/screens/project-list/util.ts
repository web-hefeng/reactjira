import { useUrlQueryParam } from "../../utils/url";
import { useMemo } from "react";

export const useProjectsSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  return [
    useMemo(
      () => ({ ...param, personId: Number(param.personId) || undefined }),
      [param]
    ),
    setParam,
  ] as const;
};

export const useProjectModel = () => {
  const [{ projectCreate }, setProjectModelOpen] = useUrlQueryParam([
    "projectCreate",
  ]);
  const open = () => setProjectModelOpen({ projectCreate: true });
  const close = () => setProjectModelOpen({ projectCreate: undefined });

  return {
    projectModelOpen: projectCreate === "true",
    open,
    close,
  };
};
