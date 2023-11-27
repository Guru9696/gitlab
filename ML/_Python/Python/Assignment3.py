#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd

df = pd.read_csv('iris3.csv')


# In[3]:


print(df.head(90))


# In[10]:


df['species'].replace(['setosa', 'versicolor', 'virginica'],[0, 1, 2], inplace=True)

df

