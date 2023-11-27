#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
from sklearn.linear_model import LinearRegression


# In[3]:


df = pd.read_csv('house-prices-2.csv')


# In[4]:


print(df.head())


# In[13]:


input = df['Sq-ft']


# In[14]:


print(input.head())


# In[15]:


target = df['Price']


# In[16]:


print(target.head())


# In[17]:


model = LinearRegression()


# In[19]:


model.fit(input.values.reshape((-1,1)),target)


# In[25]:


prediction = model.predict([[1726]])

print("Predicted Price : ",prediction)

