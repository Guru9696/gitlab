#!/usr/bin/env python
# coding: utf-8

# In[10]:


import pandas as pd


df = pd.read_csv("iris2.csv")


# In[11]:


print(df.head(30))


# In[8]:


df = df.dropna()


# In[9]:


print(df.head(30))

