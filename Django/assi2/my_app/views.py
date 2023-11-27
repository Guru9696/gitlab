from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')
 
def f1(req):
	return render(req,"a.html")
def f2(req):
	return render(req,"b.html")
def f3(req):
	return render(req,"c.html")
