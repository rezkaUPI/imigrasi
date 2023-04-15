// pages/UserSetting.js
import { useState } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import DashboardLayout from '../components/DashboardLayout';
import styles from '../styles/styles.module.css'

const UserSetting = () => {
  const [users, setUsers] = useState([
    { username: 'user_a', role: 'a' },
    { username: 'user_b', role: 'b' },
    { username: 'user_c', role: 'c' },
  ]);

  const handleRoleChange = (index, newRole) => {
    const updatedUsers = users.map((user, i) => {
      if (i === index) {
        return { ...user, role: newRole };
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  return (
    <DashboardLayout>
    <ProtectedRoute roles={['superuser']}>
      <div>
        <h1>User Settings</h1>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.username}>
                <td>{user.username}</td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(index, e.target.value)}
                  >
                    <option value="a">Role A</option>
                    <option value="b">Role B</option>
                    <option value="c">Role C</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProtectedRoute>
    </DashboardLayout>
  );
};

export default UserSetting;