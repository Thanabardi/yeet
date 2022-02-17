from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *

from api.models import Session
from api.serializers import ScoreSerializer
from api.constants import *


class ListScore(APIView):
    """Get list of score with specified length"""
    def get(self, request, length=DEFAULT_SCORE_LIST_LENGTH):
        sessions = Session.objects.order_by('-score').exclude(score__isnull=True)
        sessions = sessions[:min(int(length), len(sessions))]
        return Response({"score": ScoreSerializer(sessions, many=True).data})