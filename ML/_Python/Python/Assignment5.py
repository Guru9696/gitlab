#!/usr/bin/env python
# coding: utf-8

# In[4]:


import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import LabelEncoder


# In[48]:


df = pd.read_csv('house-prices.csv')

print(df.head())


# In[49]:


input = df.drop('Price', axis=1)


# In[50]:


print(input.head())


# In[51]:


input.pop('Home')


# In[52]:


print(input.head())


# In[53]:


target = df['Price']


# In[54]:


print(target)


# In[55]:


le_brick = LabelEncoder()
le_neighbourhood = LabelEncoder()


# In[56]:


input['Brick'] = le_brick.fit_transform(input['Brick'])
input['Neighbourhood'] = le_neighbourhood.fit_transform(input['Neighbourhood'])


# In[57]:


print(input.head(60))


# In[58]:


model = LinearRegression()


# In[67]:


model.fit(input.values,target)


# In[70]:


prediction = model.predict([[2090,5,2,2,0,0]])
print("Predicted House Price : ",prediction[0])


# In[ ]:




