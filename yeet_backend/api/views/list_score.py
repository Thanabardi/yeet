from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *

from api.models import Session
from api.serializers import ScoreSerializer
from api.constants import *


class ListScore(APIView):
    def get(self, request):
        length = request.query_params.get("length")
        length = int(length) if length is not None else DEFAULT_SCORE_LIST_LENGTH

        sessions = Session.objects.order_by('-score').exclude(score__isnull=True)
        sessions = sessions[:min(length, len(sessions))]

        return Response({"score": ScoreSerializer(sessions, many=True).data})