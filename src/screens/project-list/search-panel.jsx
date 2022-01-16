import React from "react";

export const SearchPanel = ({ users, param, setParam }) => {
  return (
    <form action="">
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
          name=""
          id=""
        >
          <option value="">负责人</option>
          {users.map((users) => (
            <option key={users.id} value={users.id}>
              {users.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
