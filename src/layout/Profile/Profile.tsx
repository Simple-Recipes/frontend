
import React, { useState, useEffect } from 'react';
import { UserProfile, getUserProfile, updateUserProfile } from '../../models/userApi';


const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(token);
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [token]);

  const handleSave = async () => {
    if (profile) {
      try {
        const updatedProfile = await updateUserProfile(profile, token);
        setProfile(updatedProfile);
        setEditMode(false);
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div className="card p-4" style={{ maxWidth: '600px', width: '100%' }}>

        
      {profile && (
        <div>
          <h1 className="text-center">User Profile</h1>
          <p>No Avatar</p>
          <div className="mb-3">
            <label>Username: </label>
            {editMode ? (
              <input
                type="text"
                value={profile.username}
                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
              />
            ) : (
              <span>{profile.username}</span>
            )}
          </div>
          <div className="mb-3">
            <label>Password: </label>
            {editMode ? (
              <input
                type="password"
                value={profile.password}
                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
              />
            ) : (
              <span> ******** </span>
            )}
          </div>
          <div className="mb-3">
            <label>Email: </label>
            {editMode ? (
              <input
                type="text"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            ) : (
              <span>{profile.email}</span>
            )}
          </div>
          {profile.createTime && (
            <div>
              <label>Account Created:</label>
              <span>{profile.createTime}</span>
            </div>
          )}
          {editMode ? (
            <button   className='btn button btn-secondary' onClick={handleSave}>Save</button>
          ) : (
            <button className='btn button btn-secondary' onClick={() => setEditMode(true)}>Edit</button>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default Profile;
