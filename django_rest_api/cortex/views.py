from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import PostSerializer, EmployeeSerializer
from .models import Post, Employee


@api_view(['GET', 'POST'])
def posts(request):
    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def post_detail(request, pk):
    try:
        post = Post.objects.get(id=pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PostSerializer(post)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def employees(request):
    if request.method == 'GET':
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        print(request.data)
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def employee_detail(request, pk):
    try:
        employee = Employee.objects.get(id=pk)
    except Employee.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EmployeeSerializer(employee)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EmployeeSerializer(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
'''
@csrf_exempt
def posts(request):
    if (request.method == 'GET'):
        # get all the posts
        posts = Post.objects.all()
        # serialize the post data
        serializer = PostSerializer(posts, many=True)
        # return a Json response
        return JsonResponse(serializer.data, safe=False)
    elif (request.method == 'POST'):
        # parse the incoming information
        data = JSONParser().parse(request)
        # instanciate with the serializer
        serializer = PostSerializer(data=data)
        # check if the sent information is okay
        if (serializer.is_valid()):
            # if okay, save it on the database
            serializer.save()
            # provide a Json Response with the data that was saved
            return JsonResponse(serializer.data, status=201)
            # provide a Json Response with the necessary error information
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def post_detail(request, pk):
    try:
        # obtain the post with the passed id.
        post = Post.objects.get(id=pk)
    except:
        # respond with a 404 error message
        return HttpResponse(status=404)
    if (request.method == 'GET'):
        try:
            serializer = PostSerializer(post)
            return JsonResponse(serializer.data, status=200)
        except:
            return HttpResponse(status=404)
    if (request.method == 'PUT'):
        # parse the incoming information
        data = JSONParser().parse(request)
        # instanciate with the serializer
        serializer = PostSerializer(post, data=data)
        # check whether the sent information is okay
        if (serializer.is_valid()):
            # if okay, save it on the database
            serializer.save()
            # provide a JSON response with the data that was submitted
            return JsonResponse(serializer.data, status=201)
        # provide a JSON response with the necessary error information
        return JsonResponse(serializer.errors, status=400)
    elif (request.method == 'DELETE'):
        # delete the post
        post.delete()
        # return a no content response.
        return HttpResponse(status=204)


@csrf_exempt
def employees(request):
    if (request.method == 'GET'):
        # get all the employees
        employees = Employee.objects.all()
        # serialize the employee data
        serializer = EmployeeSerializer(employees, many=True)
        # return a Json response
        return JsonResponse(serializer.data, safe=False)
    elif (request.method == 'POST'):
        # parse the incoming information
        data = JSONParser().parse(request)
        # instanciate with the serializer
        serializer = EmployeeSerializer(data=data)
        # check if the sent information is okay
        if (serializer.is_valid()):
            # if okay, save it on the database
            serializer.save()
            # provide a Json Response with the data that was saved
            return JsonResponse(serializer.data, status=201)
            # provide a Json Response with the necessary error information
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def employee_detail(request, pk):
    try:
        # obtain the employee with the passed id.
        employee = Employee.objects.get(id=pk)
    except:
        # respond with a 404 error message
        return HttpResponse(status=404)
    if (request.method == 'GET'):
        try:
            serializer = EmployeeSerializer(employee)
            return JsonResponse(serializer.data, status=200)
        except:
            return HttpResponse(status=404)
    if (request.method == 'PUT'):
        # parse the incoming information
        data = JSONParser().parse(request)
        # instanciate with the serializer
        serializer = EmployeeSerializer(employee, data=data)
        # check whether the sent information is okay
        if (serializer.is_valid()):
            # if okay, save it on the database
            serializer.save()
            # provide a JSON response with the data that was submitted
            return JsonResponse(serializer.data, status=201)
        # provide a JSON response with the necessary error information
        return JsonResponse(serializer.errors, status=400)
    elif (request.method == 'DELETE'):
        # delete the employee
        employee.delete()
        # return a no content response.
        return HttpResponse(status=204)'''
