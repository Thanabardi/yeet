from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *
from django.views.decorators.csrf import csrf_exempt

from api.models import Session, Machine

from datetime import datetime


class SentScore(APIView):
    """Send score and end session after score is sent"""
    @csrf_exempt
    def put(self, request):
        session_id = request.data["session_id"]
        machine_code = request.data["machine_code"]
        score = request.data["score"]

        if session_id is not None and machine_code is not None:
            try:
                session = Session.objects.get(id=session_id)
            except Session.DoesNotExist:
                return Response({"msg": f"session not found"}, HTTP_404_NOT_FOUND)
            if session.machine.machine_code == machine_code and not session.is_done:
                # get highest score
                max_session = Session.objects.order_by('-score')[0]
                # update session
                session.is_done = True
                session.end = datetime.now()
                session.score = score
                session.save()
                # find winner
                is_winner = (session.score > max_session.score)
                return Response({"msg": "ok", "is_winner": is_winner})
            else:
                return Response({"msg": "invalid machine code or session is already done"}, HTTP_400_BAD_REQUEST)
        
        return Response({"msg": "please specify session id and machine code"}, HTTP_400_BAD_REQUEST)