from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *

from django.contrib.auth.models import User
from api.models import Session
from api.serializers import ScoreSerializer, UserSerializer
from api.constants import *


class ListScore(APIView):
    """Get list of score with specified length"""
    def get(self, request, length=DEFAULT_SCORE_LIST_LENGTH):
        sessions = Session.objects.order_by('-score').exclude(score__isnull=True).exclude(user__isnull=True)
        sessions = sessions[:min(int(length), len(sessions))]
        return Response({"score": ScoreSerializer(sessions, many=True).data})


class PersonalListScore(APIView):
    """Get list of personal score records"""
    def get(self, request, user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"msg": "user not found"}, HTTP_404_NOT_FOUND)
        session = Session.objects.filter(user__id=user_id).order_by('-score').exclude(score__isnull=True)
        return Response({
            "user": UserSerializer(user).data,
            "score": ScoreSerializer(session, many=True).data
            })